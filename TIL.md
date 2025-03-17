#This will me a file for me to notate a  list of the things I am learning so that I don't over polute the slack channel

## 3/13/25

#It is important to declare variables with 'const' so that I don't accidentally overwrite them and so that I don't polute global with too many variables

#If I use quotes such as "" or '', don't allow calls to variables in strings, `` does

#If I am to use express, I must load the express module using require() and assgign a variable for it

#I can use res.json() to convert a defined variable containing the code for the Json object I'm creating to a minified json object

#I'm slowly but surely picking up on the sytax for javascript. I'm using llms (grok is conversational and seems to make more intuitive leaps that GPT) to learn about new functions as i come across them


## 3/14/25

#Today is docker day! I'm going through the introductory lessons that docker has on their website. so far I've created some basic docker containers from a premade image on docker's repository. Additionally I've learned  some basic functions such as how to delete a container, update the code contained in the container and rebuild the updated container.

#I've also learned that I can start a repository on docker hub to share the containers I make and how to push them from vs code to the repository

#I've began learning about persistance with with docker containers. So far the trainings have talked about volumes, which will store data external to the docker container and allows for data to persist between iterations of the container, so long as they are pointed to the same file path.

#I've also began learning about the bind method of persistence with docker containers, which seems to be useful for continuous integration and integration, as it ties the docker container to the host file/file path and allows for the real time sync. I've also read up more on this and found that it allows for changes to be made from either side, which seems like it could be a potential vulerability for a secure system.

## 3/15/25

#Worked with persistence again and had some trouble adressing a volume. I wasn't able to tell what I was doing wrong. I think it may have been in how I defined the target. It is a little confusing using windows as going back and forth between its file paths and the linux paths can get a little confusing.

#Learned about multi container apps with the todo app and a sql server. It made a bit more sense with the persistance to have one box to have the app in and another box to hold its data. I also learned some basics on how to network the containers together

#I learned about docker compose! This was exciting. It reminded me more of the coding that i've done before in matlab. It was awesome seeing how quickly it can create the requested containers and is a great glimpse at the power of docker to deploy images.

## 3/16/25
#Working late last night I finished the docker basic training workshop. I learned that in writing yml files the tab key shouldn't be used to make spaces. this results in a parsing error when executing the file. 

#I also learned that it is best practice to include dependencies in the package.json file for the build so that it remains cahed. this speeds up future builds and helps to keep the size of my container to a minimum. 

#I was able to to complete and put my app into a container. Upon running it I noticed that while it did run it wasn't exiting correctly, so I had to initiate a forced close by hitting ctrl+c 3 times. In researching this more with grok it seems as though there was some kind of open ended process suspected to be happening in node. with the help of grok I was able to add some code that ensured a smooth termination of the app when I hit ctrl+c.

#I next synced my vs code to the repository in github, which took a bit of configuring. I had to go through the initial set up to sync an initialize github and connect my local folder to my repository. I also set up a github ignore file for the node modules folder, and was successful in syncing all my local files. 

 #I was able to write my first iteration of the yml file that I need to set up my github action, and have it uploaded to my repository. I was interested to see that it is the same type of file as docker compose and am making the conenction that this is an important file for automating processes. I included the test file in the apprentice action folder as directed, and am experiencing several failures, notably that it isn't able to reach my app at the site. I checked into what i believed was the code for the test file and noted that it calls for port 80 as was noted and that the file path it calls for on the port is simply root. I will continue tomorrow by analyzing the errors and trying to update my code, rebuilding my container and image, and trying again before reaching out to the group.
