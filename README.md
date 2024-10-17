# Zabbix Report Viewer

## 1. Introduction
This document explains how to install and use the provided software to generate simple acknowledgment reports from your Zabbix system. The software extracts data from the Zabbix database and presents it in Excel format.

## 2. Installation
The software only works on a Linux server where Zabbix is installed with MySQL.

### 2.1 Installation Steps
1. **Take a snapshot (recommended)**
2. **Transfer the provided file via FTP or SFTP**
3. **Install Node.js**
4. **Install MySQL and Express modules**
5. **Run the terminal, navigate to the project directory, and install the necessary dependencies:**
   ```
   sudo yum install node
   ```
   ```
   npm install mysql2
   ```
Open the app.js file with the Nano editor and modify the necessary MySQL sections (PORT, HOST, USER, PASSWORD, DATABASE) according to your own settings.
3. Usage
On the homepage, there are a total of 3 buttons, 2 listboxes, and 1 textbox. The first button navigates to the second page. When you click the "Send" button, any query entered in the textbox will be displayed in a table below. When you click the "Run Query Automatically" button, a query will be executed to retrieve data such as the severity of events in the acknowledges. The first listbox at the top contains templates from your Zabbix, and if an alarm exists, the second template will indicate from which host it came. Just click, and you will see the output in the lower area.

3.1 Continued Usage
You will see a listbox on the screen. The listbox displays the users from Zabbix. After selecting the user you want, you can find the log of the latest acknowledge entry they made. The log will show the time of the latest alarm and what was entered. After clicking the "Export to Excel" button, you can export the data for the selected user to Excel, providing you with a document record. 😊

4. Conclusion
As a result, the visual interface for the report output has been displayed on the screen.

(1) Represents the first page.
(2) Represents the second page, /user.html.
Good luck with your work! 😊

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

