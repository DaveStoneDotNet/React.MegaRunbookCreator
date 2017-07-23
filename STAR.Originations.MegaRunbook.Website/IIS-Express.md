### Added Conveyor extension in Visual Studio

Conveyor allows you to access your web applications from other machines such as iOS and Android devices, even if the web application is hosted on the development web server. Use this when testing your web project from desktop computers, phones or tablets.

https://marketplace.visualstudio.com/items?itemName=vs-publisher-1448185.ConveyorbyKeyoti

Alternatively, this can be done manually as described here:

http://www.lakshmikanth.com/enable-external-request-on-iis-express/

### Step 1 : Configure IIS Express

In Visual Studio, open file...
 `<solution>/.vs/config/applicationhost.config` and `localhost` in `‘bindingInformation’ to ‘*’`.

It should look similar to the following:

``` 
  <site name="STAR.Originations.MegaRunbook.Website" id="2">
      <application path="/" applicationPool="Clr4IntegratedAppPool">
          <virtualDirectory path="/" physicalPath="C:\DATA\Projects\REACT\React.MegaRunbookCreator\STAR.Originations.MegaRunbook.Website" />
      </application>
      <bindings>
          <binding protocol="http" bindingInformation="*:50120:localhost" />
      </bindings>
  </site>
```

HTTP Binding

### Step 2: Allow URL Access

Open command prompt in ‘Administrator’ mode and run the following...

```
netsh http add urlacl url=http://*:51603/ user=everyone
```
 
Note: Run this command with your IIS listening port. In my case above, application was listening on port 51603

### Step 3: Configure Firewall Port

* Go to the “Control Panel\Windows Firewall”
* Click “Advanced settings”
* Select “Inbound Rules”
* Click on “New Rule …” button
* Select “Port”, click “Next
* Fill your IIS Express listening port number, click “Next”
* Select “Allow the connection”, click “Next”
* Check where you would like allow connection to IIS Express (Domain, Private, Public), click “Next”
* Enter rule name and click “Finish”
