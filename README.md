# bCrypt-basics

A basic demonstration of how bcrypt can be used on the back end to perform hashing and salting for authentication of an application. Databases will store a hashed password that is not plain text. 

Using the built in methods of the bcrypt library you can see that the salt is concatonated with the hash to allow bcrypt to retrieve the stored password and compare it to the users input returning a boolean. 

When true, the user will gain access to the application. The number of salting rounds are linearly related to the security of the password. However, going about 12 rounds will resutl in a slower log in experience. 12 is the generally recommended number as of 2022 while 10 is the bcrypt default. 
