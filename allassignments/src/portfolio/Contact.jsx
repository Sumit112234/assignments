export default function ContactInfo({ info }) {

  console.log({info})
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
      <p className="text-gray-600 mb-6">
        {info?.message}
      </p>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="text-blue-600 font-semibold mr-2">📧 Email:</span>
          <span className="text-gray-600">{info?.email}</span>
        </div>
        <div className="flex items-center">
          <span className="text-blue-600 font-semibold mr-2">📱 Phone:</span>
          <span className="text-gray-600">{info?.phone}</span>
        </div>
        <div className="flex items-center">
          <span className="text-blue-600 font-semibold mr-2">📍 Location:</span>
          <span className="text-gray-600">{info?.location}</span>
        </div>
      </div>
    </div>
  );
}
