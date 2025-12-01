"use client"

import { useState, useEffect } from "react"
import { 
  useParticipants, 
  useLocalParticipant,
  VideoTrack,
  AudioTrack,
  ParticipantTile,
  TrackRefContext
} from "@livekit/components-react"
import { Track } from "livekit-client"
import { Mic, MicOff, Video, VideoOff, ChevronLeft, ChevronRight, Pin } from "lucide-react"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs) {
  return twMerge(clsx(inputs))
}


function ParticipantVideoTile({ participant, isPinned, onPin }) {
  const isLocal = participant.isLocal
  const videoTrack = participant.getTrackPublication(Track.Source.Camera)
  const audioTrack = participant.getTrackPublication(Track.Source.Microphone)
  const screenShareTrack = participant.getTrackPublication(Track.Source.ScreenShare)
  
  const isVideoEnabled = videoTrack?.isSubscribed && !videoTrack?.isMuted
  const isAudioEnabled = audioTrack?.isSubscribed && !audioTrack?.isMuted
  const isScreenSharing = screenShareTrack?.isSubscribed && !screenShareTrack?.isMuted

  // Get initials for avatar
  const getInitials = (name) => {
    if (!name) return "U"
    const parts = name.split(" ")
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase()
    }
    return name.slice(0, 2).toUpperCase()
  }

  return (
    <div className={cn(
      "relative rounded-xl overflow-hidden bg-gray-900 border-2 transition-all",
      isPinned ? "border-purple-500 shadow-lg shadow-purple-500/50" : "border-gray-700",
      "group"
    )}>
      {/* Video or Avatar */}
      <div className="w-full h-full flex items-center justify-center relative">
        {isVideoEnabled && videoTrack?.track ? (
          <VideoTrack
            trackRef={{
              participant,
              publication: videoTrack,
              source: Track.Source.Camera,
            }}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-blue-900/50">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-purple-600 flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl font-bold">
              {getInitials(participant.identity)}
            </div>
          </div>
        )}

        {/* Screen Share Indicator */}
        {isScreenSharing && (
          <div className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-md flex items-center gap-1">
            <Video className="h-3 w-3" />
            Presenting
          </div>
        )}

        {/* Audio Track (hidden but playing) */}
        {isAudioEnabled && audioTrack?.track && (
          <AudioTrack
            trackRef={{
              participant,
              publication: audioTrack,
              source: Track.Source.Microphone,
            }}
          />
        )}
      </div>

      {/* Participant Info Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="text-white text-xs sm:text-sm font-medium truncate">
              {participant.identity} {isLocal && "(You)"}
            </span>
            {!isAudioEnabled && (
              <MicOff className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 flex-shrink-0" />
            )}
            {!isVideoEnabled && (
              <VideoOff className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 flex-shrink-0" />
            )}
          </div>
          
          {/* Pin button */}
          <button
            size="sm"
            variant="ghost"
            onClick={() => onPin(participant.sid)}
            className={cn(
              "opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 p-0",
              isPinned && "opacity-100"
            )}
          >
            <Pin className={cn("h-3 w-3", isPinned && "fill-purple-500 text-purple-500")} />
          </button>
        </div>
      </div>

      {/* Speaking Indicator */}
      {participant.isSpeaking && (
        <div className="absolute inset-0 border-4 border-green-500 rounded-xl pointer-events-none animate-pulse" />
      )}
    </div>
  )
}

export function VideoGridMeeting() {
  const participants = useParticipants()
  const { localParticipant } = useLocalParticipant()
  
  const [currentPage, setCurrentPage] = useState(0)
  const [pinnedParticipant, setPinnedParticipant] = useState(null)
  
  const PARTICIPANTS_PER_PAGE = 8
  
  // Combine local participant with remote participants
  const allParticipants = localParticipant 
    ? [localParticipant, ...participants.filter(p => !p.isLocal)]
    : participants
  
  // If someone is pinned, show them prominently
  const pinnedPerson = allParticipants.find(p => p.sid === pinnedParticipant)
  const otherParticipants = allParticipants.filter(p => p.sid !== pinnedParticipant)
  
  const totalPages = Math.ceil(otherParticipants.length / PARTICIPANTS_PER_PAGE)
  const startIndex = currentPage * PARTICIPANTS_PER_PAGE
  const endIndex = startIndex + PARTICIPANTS_PER_PAGE
  const currentParticipants = otherParticipants.slice(startIndex, endIndex)

  const handlePin = (participantSid) => {
    setPinnedParticipant(prev => prev === participantSid ? null : participantSid)
  }

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1)
    }
  }

  // Calculate grid layout based on number of participants
  const getGridClass = (count) => {
    if (count === 1) return "grid-cols-1"
    if (count === 2) return "grid-cols-1 sm:grid-cols-2"
    if (count <= 4) return "grid-cols-2"
    if (count <= 6) return "grid-cols-2 lg:grid-cols-3"
    return "grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  }

  // Pinned layout: large pinned video + smaller grid below
  if (pinnedPerson) {
    return (
      <div className="h-full w-full p-4 flex flex-col gap-4">
        {/* Pinned Participant - Takes 70% height */}
        <div className="flex-[7] min-h-0">
          <ParticipantVideoTile
            participant={pinnedPerson}
            isPinned={true}
            onPin={handlePin}
          />
        </div>

        {/* Other Participants - Takes 30% height */}
        {currentParticipants.length > 0 && (
          <div className="flex-[3] min-h-0 relative">
            <div className={cn(
              "grid gap-2 h-full",
              getGridClass(Math.min(currentParticipants.length, 4))
            )}>
              {currentParticipants.slice(0, 4).map((participant) => (
                <ParticipantVideoTile
                  key={participant.sid}
                  participant={participant}
                  isPinned={false}
                  onPin={handlePin}
                />
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                <button
                  size="sm"
                  variant="secondary"
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className="rounded-full h-8 w-8 p-0 bg-black/80 hover:bg-black/90"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="text-white text-xs bg-black/80 rounded-full px-2 py-1 text-center">
                  {currentPage + 1}/{totalPages}
                </div>
                <button
                  size="sm"
                  variant="secondary"
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className="rounded-full h-8 w-8 p-0 bg-black/80 hover:bg-black/90"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }

  // Regular grid layout (no pinned participant)
  return (
    <div className="h-full w-full p-4 relative">
      <div className={cn(
        "grid gap-3 sm:gap-4 h-full",
        getGridClass(currentParticipants.length)
      )}>
        {currentParticipants.map((participant) => (
          <ParticipantVideoTile
            key={participant.sid}
            participant={participant}
            isPinned={false}
            onPin={handlePin}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
          <button
            size="sm"
            variant="secondary"
            onClick={prevPage}
            disabled={currentPage === 0}
            className="rounded-full h-10 w-10 p-0 bg-black/80 hover:bg-black/90 backdrop-blur-sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="text-white text-sm bg-black/80 backdrop-blur-sm rounded-full px-3 py-2 text-center font-medium">
            {currentPage + 1}/{totalPages}
          </div>
          <button
            size="sm"
            variant="secondary"
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className="rounded-full h-10 w-10 p-0 bg-black/80 hover:bg-black/90 backdrop-blur-sm"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Empty State */}
      {allParticipants.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <Video className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <p className="text-xl font-semibold">No participants yet</p>
            <p className="text-sm text-gray-400 mt-2">Waiting for others to join...</p>
          </div>
        </div>
      )}
    </div>
  )
}

// Demo with mock participants
export default function Demo() {
  // Mock participant data
  const mockParticipants = [
    { sid: "1", identity: "Jaxon Wooley", isLocal: true, isSpeaking: false, getTrackPublication: () => null, isVideoEnabled: true, isAudioEnabled: true },
    { sid: "2", identity: "Alexis Lim", isLocal: false, isSpeaking: true, getTrackPublication: () => null, isVideoEnabled: true, isAudioEnabled: true },
    { sid: "3", identity: "Nina Liu", isLocal: false, isSpeaking: false, getTrackPublication: () => null, isVideoEnabled: true, isAudioEnabled: false },
    { sid: "4", identity: "Joe Carlson", isLocal: false, isSpeaking: false, getTrackPublication: () => null, isVideoEnabled: false, isAudioEnabled: true },
    { sid: "5", identity: "Iván Orfetti", isLocal: false, isSpeaking: false, getTrackPublication: () => null, isVideoEnabled: true, isAudioEnabled: true },
    { sid: "6", identity: "Oscar Jordan", isLocal: false, isSpeaking: false, getTrackPublication: () => null, isVideoEnabled: true, isAudioEnabled: true },
    { sid: "7", identity: "Rosa Nicola", isLocal: false, isSpeaking: false, getTrackPublication: () => null, isVideoEnabled: true, isAudioEnabled: true },
    { sid: "8", identity: "Jennifer Kramer", isLocal: false, isSpeaking: false, getTrackPublication: () => null, isVideoEnabled: true, isAudioEnabled: true },
  ]

  return (
    <div className="h-screen w-full bg-gradient-to-br from-black via-purple-950/30 to-black">
      <div className="h-full">
        {/* Mock VideoGridMeeting - In real implementation, this would use LiveKit hooks */}
        <div className="h-full w-full p-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 h-full">
            {mockParticipants.map((participant, index) => (
              <div 
                key={participant.sid}
                className={cn(
                  "relative rounded-xl overflow-hidden bg-gray-900 border-2 border-gray-700 group transition-all hover:border-purple-500"
                )}
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-blue-900/50">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-purple-600 flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
                    {participant.identity.split(" ").map(n => n[0]).join("")}
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <span className="text-white text-xs sm:text-sm font-medium truncate">
                        {participant.identity} {participant.isLocal && "(You)"}
                      </span>
                      {!participant.isAudioEnabled && (
                        <MicOff className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>

                {participant.isSpeaking && (
                  <div className="absolute inset-0 border-4 border-green-500 rounded-xl pointer-events-none animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}