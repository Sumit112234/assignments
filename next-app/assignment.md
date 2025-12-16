1. What problem does Zod solve in a backend application? Why not rely only on frontend validation?
Zod validates backend data securely. Frontend validation can be bypassed easily.

2. What is the difference between z.string() and z.string().min(3)?
z.string() allows any string; min(3) enforces minimum length.

3. What happens if Zod validation fails? How do you send the error to the client?
It throws errors. Catch them and send structured error messages in response.

4. Explain the difference between .parse() and .safeParse().
parse() throws errors; safeParse() returns success or error safely.

5. How do you validate email and password using Zod? Explain rules.
Use email() for email, min length and regex for password strength.

6. What is z.object() and why is nested validation important?
z.object() validates objects. Nested validation ensures deep data correctness.

7. Why is Zod better than manual if-else validation?
Cleaner, reusable, readable, and less error-prone.

8. What is authentication? How is it different from authorization?
Authentication verifies identity; authorization controls access.

9. Why should passwords never be stored in plain text? Name one hashing library.
Plain text is unsafe. Use bcrypt for hashing.

10. What is JWT? Name its three parts and their purpose.
Header, Payload, Signature: metadata, user data, verification.

11. Where should JWT be stored on the client? Which option is dangerous and why?
Store in HTTP-only cookies. LocalStorage is risky due to XSS.

12. Explain the backend login flow step by step.
Validate user → verify password → generate token → send token.

13. What is token expiration and why is it important?
Limits misuse and improves security.

14. What is authentication middleware? Give one use case.
Middleware verifies token before accessing protected routes.

15. What is MongoDB? How is it different from SQL databases?
MongoDB is NoSQL, JSON-based; SQL uses tables and fixed schemas.

16. What is a Mongoose schema and why is it required?
Defines structure, validation, and rules for documents.

17. What does unique: true do? Does it guarantee uniqueness?
Creates index only; does not fully guarantee uniqueness.

18. Difference between findOne() and findById()?
findOne uses conditions; findById uses document ID.

19. Why are indexes important in MongoDB?
They improve query speed and performance.

20. Why do we use .env files for MongoDB connection? What if pushed to GitHub?
Hides secrets. If pushed, credentials can be leaked.