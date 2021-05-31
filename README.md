# ten_Four_One_Four
To begin, 
I'd recommend checking out your package.json, 
around line 19. Here, Node is expecting a script that will be run when npm start is executed, 
whereas it is currently getting your MySQL connection string.
 As such, I would recommend modifying it to run node server
  (or whichever file you wish to serve as the entrypoint for your application):
"start": "node server",
From there, 
we can then move over to your config/connection.js.
 It looks like you have JAWSDB_URL on lines 11 and 24.
  I would recommend removing those for now, 
  as this connection URI will instead be read from Heroku's environment variables instead of via your code.
Finally, 
you should then be able to set JAWSDB_URL in your Heroku environment variable (config vars) for your app. 
To do this, 
you can use the Heroku CLI. 
You may find the documentation for this process here; 
however, as a quick example, 
if you wish to set the JAWSDB_URL for your app, then you should be able to execute the following:
heroku config:set JAWSDB_URL=mysql://hm0tfw0xsfp2w0n9:r5zvvht1n1blep0h@ik1eybdutgxsm0lo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/wa0qgae5sdrboh8b
Once the config var has been set, when your app is deployed to Heroku, then you will be able to access this string via process.env.JAWSDB_URL. (edited) 

It is worth noting that with these changes in place, your app still may not work fully; however, that is perfectly okay! With that said, I believe that the steps outlined above should get you started in the right direction!

You're welcome! While you work on implementing/testing my suggestions above, I will close out this ticket; however, if you do get stuck again or would like additional assistance, please feel free to reach back out via a new ticket! :slightly_smiling_face:
1:24
Thank you again for reaching out to the Learning Assistant Team. If you have any further questions or get stuck again, please feel free to reach back out. Additionally, if this conversation was helpful, please consider leaving a rating once this ticket has been closed. I hope you have a wonderful rest of your day!



<<<<<<< HEAD




Thanks for resubmitting, 
Austin.  
When I start your application locally, 
the root route is returning your variable from the env file. 
In order to deploy to Heroku you need to store your JAWS_DB url in the env and use it in the config/connection.js.  
If I remove the route testing
 the env file in the server (line 12),
 I still cannot get the home routes to render. 
 I'm going to mark incomplete for now. 
 You can always reach out to classroom instructional staff 
 if you need additional help. 
 Good luck! 
 Go gurgle your mouth out with a reveolver :) 
=======
yes 
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments 
>>>>>>> 85e4452a7bc4680d12a18ce8b4c079877ba7449c
