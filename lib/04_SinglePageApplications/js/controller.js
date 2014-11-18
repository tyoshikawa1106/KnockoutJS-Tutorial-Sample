$(function() {
    //ViewModel
    function WebmailViewModel() {
        // Data
        var self = this;
        self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
        self.chosenFolderId = ko.observable();
        self.chosenFolderData = ko.observable();
        self.chosenMailData = ko.observable();

        // Behaviours    
        self.goToFolder = function(folder) { 
            self.chosenFolderId(folder);
            self.chosenMailData(null); // Stop showing a mail
        };
        self.goToMail = function(mail) { 
            self.chosenFolderId(mail.folder);
            self.chosenFolderData(null); // Stop showing a folder
        };

        self.goToFolder('Inbox');
    };

    ko.applyBindings(new WebmailViewModel());
});