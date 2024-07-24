Feature: Signup

Definition of Done

    1. UI is satisfactory
    2. User can input data
    3. User can submit data
    4. Password can be hashed
    5. User stored on db
    6. Visual confirmation of signup (message change OR console log)
    7. Code format checked
    8. Push merge on GH

Steps:

   BE:
   1. User model
   2. POST route 'signup'
   3. Middleware hashPassword
   4. in signup controller add User to db and response

   FE:
   1. Add input (changehandler)
   2. Add submit (handleSubmit)
   3. Add state (username, email, password)
   4. Add fetch request
   5. Console.log response/data