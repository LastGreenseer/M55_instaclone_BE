Definition of Done

    1. UI is satisfactory
    2. User can input data
    3. User can submit data
    4. Compare password to what's in database
    5. Visual confirmation of login
    6. code format checked
    7. Push merge on github


steps: 

   BE:
       1. 'POST' route 'login'
       2. Middleware 'comparePassword'
       3. Confirm user exists
       4. return error message on failed attemt and  take them to profile if success

   FE:
       1. Add input (changehandler)
       2. Add submit (handleSubmit)
       3. Retreive state (username, email, password)
       4. Add fetch request
       5. console.log response/data

