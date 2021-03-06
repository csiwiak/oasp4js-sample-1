Sample Application
===
 

The sample application is built on top of the [application template](https://github.com/oasp/oasp4js-app-template) and [oasp4js extensions](https://github.com/oasp/oasp4js) showing their usage scenarios.







Getting Started
---
To get started you simply need to create specific folder structure, clone repositories for server writen in java, clone repository for client and set up tomcat web server.







Install prerequisites
---



You need a Git client to clone the repositories and the Node.js platform (including its package manager - npm) which allows Grunt and Bower to install the dependencies and build the application. [Here](https://github.com/oasp/oasp4js-app-template/wiki/Prerequisites) you can learn how to install the prerequisites
Additional install tomcat on your machine. In this example I assume that tomcat installation location is 



```
 '<tomcat_dir>'
```




Prepare folder structure
---



Create directories :


	<oasp_dir> 
           | 
		   |‾‾‾ java
		   |
            ‾‾‾ js
 



Setup server part of application
-----

* Open command prompt and go to \java folder

```  

    cd <oasp_dir>\java 

```


* Clone the server application repository using Git. In command prompt type:

```  

    git clone https://github.com/oasp/oasp4j.git

    git clone https://github.com/oasp/oasp4j-sample.git 


```

* Now install oasp4j - java component. Open command prompt and type:


```  
 
    cd <oasp_dir>\java\oasp4j 

    mvn clean install 

```


* Now install oasp4j-sample - java component. Open command prompt and type:



```
 
    cd <oasp_dir>\java\oasp4j-sample 
 
    mvn clean install

```


* File 'oasp4j-example-application.war' should appear in following location

``` 
<oasp_dir>\java\oasp4j-sample\oasp4j-example-application\target 
```


* Copy 'oasp4j-example-application.war'  file to 

```
<tomcat_dir>\webapps
```

Setup tomcat web server  
---


* Set up tomcat users 

Edit '<tomcat_dir>\conf\tomcat-users.xml'. Add roles and user passwords  like bellow:



```
<tomcat-users>
  <role rolename="Chief"/>
  <role rolename="Waiter"/>
  <role rolename="Cook"/>
  <role rolename="Barkeeper"/>
  <user password="chief" roles="Chief" username="chief"/>
  <user password="waiter" roles="Waiter" username="waiter"/>
  <user password="barkeeper" roles="Barkeeper"   username="barkeeper"/>
  <user password="cook" roles="Cook" username="cook"/>
</tomcat-users>
```






* Set up tomcat ports

	

Edit file '<tomcat_dir>\conf\server.xml'. 

Set up port 8081. This is port number that is used by our application.

```
<Connector connectionTimeout="20000" port="8081" protocol="HTTP/1.1" redirectPort="8443"/>
```









Setup client part of application
-----



Now go to \js, open command prompt and type: 	

  



``` 

    cd <oasp_dir>\js 

    git clone https://github.com/oasp/oasp4js-sample.git 

```


Now install dependencies -  go to oasp4js-sample root directory

```
    cd <oasp_dir>\js\oasp4js-sample

    npm install
```


Summary
-----



Now all project structure should look like that:



	
		<oasp_dir> 
	              | 
			      |‾‾‾ java
				  |		|
				  |		|‾‾‾ oasp4j
				  |		|
	     		  |	     ‾‾‾ oasp4j-sample
				  |  
	               ‾‾‾ js
					    |
     			         ‾‾‾ oasp4js-sample

Start application
=============



Start tomcat by  

```
<tomcat_dir>\bin\startup.bat 
```


All commands below must be executed in project 'oasp4js-sample'  root directory. Open command prompt and type:

```
cd <oasp_dir>\js\oasp4js-sample
```


Start application. (Developing)
-----



Start the application using Grunt:



``` 

    grunt serve

```



The above Grunt's task opens the application in your default browser (http://localhost:9000/oasp4j-example-application/)  and watches for any HTML/JavaScript/CSS changes. Once you do one, the page is reloaded automatically!



Start application. (Building)
-----



Build the application using Grunt:



``` 

    grunt serve:dist

```



The above Grunt's task creates the '<oasp_dir>\js\oasp4js-sample\dist' directory and put there HTML documents, CSS files (compiled from Less files) and JavaScript files (merged, minimized and obfuscated).














