How did event.preventDefault() help in handling form submission? 
  event.preventDefault() stops the browser’s default form submit, so we can customize our validation and error messages, then we can submit when we want
What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both? 
  HTML validation is done automatically by browser, so default message will be displayed. No code required → fast, consistent, accessible but has the limitiation
  JavaScript-based validation: We can custom the logic, rules and messages. But we have tp write the code.
  Combined: quick baseline validation by HTML, polished UX + stronger security by JS.
Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
   By few commandes: 
     setItem(key, value) stores a string in the browser for the same origin.
     getItem(key) reads it back; if present, we set the input’s value
     Limitation-> Security issue: Any JS on the page can read it. Data is stored as plain text and not encripted.
     Peformance-> Lots of stored data in local storage can impact the performance for retrieve it.
Describe a challenge you faced in implementing the real-time validation and how you solved it.
  One challenge I faced was with password matching in real-time validation. 
  At first, I tried to set the custom error message on the password field itself when the confirmation didn’t match. 
  The problem was that the browser kept showing the built-in message “Please match the requested format” instead of my custom text. 
  This happened because the password input had its own pattern and minlength rules; the mismatch check was being overridden by those constraints.
  How I solved it? I separated the logic into two levels:
      Validate the password field against its own rules (required, minlength, pattern) and set errors there. So some modification I have done in HTML
      Validate the confirm password field against the password value and set the “Passwords must match” message on the confirmation input only.
      I also cleared existing messages first with setCustomValidity('') before setting a new one.
How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?
  Clearing before setting: I called setCustomValidity('') at the start of each check to avoid displaying old messages.
  Meaningful text: I wrote messages that tell the user exactly what to fix, e.g., “Username must be at least 3 characters” or “Passwords must match.”
  Using field-specific spans: I updated only that span by getting its ID and assigning the messages, so messages appeared right under the field that needed attention.
  adding the control trigerr while filling that field
