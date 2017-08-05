// script.js

/* Main app of the site */
var cs2App = angular.module('cs2App', ['ngRoute']);

/* Routing */
cs2App.config(function($routeProvider){
  $routeProvider
  
      // home
      .when('/', {
        templateUrl:'cs2home.html',
        controller:'homeCtrl'
      })
      
      // projects
      .when('/projects', {
        templateUrl:'projects.html',
        controller:'projectCtrl'
      })
      
      // labs
      .when('/labs', {
        templateUrl:'labs.html',
        controller:'labCtrl'
      })
      
      // lectures
      .when('/lectures', {
        templateUrl:'lectures.html',
        controller:'lectureCtrl'
      })
      
		// lectures
      .when('/resources', {
        templateUrl:'resources.html',
        controller:'resourceCtrl'
      })
      
      // hours
      .when('/hours', {
        templateUrl:'hours.html',
        controller:'hoursCtrl'
      })
      
      // staff
      .when('/staff', {
        templateUrl:'staff.html',
        controller:'staffCtrl'
      })
});

/* Services */

cs2App.service('classService', function(){
  
  this.headers = ["home", "projects", "labs", "lectures", "resources", "hours", "staff"];
  
  this.changeActive = function(targetClass) {
    $('.nav li.active').removeClass('active');
    $('.nav li.' + targetClass).addClass('active');
    this.removePhotoClasses();
    this.changeHeader(targetClass);
  };
  
  this.removePhotoClasses = function() {
    $("div.photo-head").attr('class', 'photo-head');
  };
  
  this.changeHeader = function(targetClass){
    var $head = $(".photo-head");
    switch(this.headers.indexOf(targetClass)){
      case 0:
        $head.addClass('home-head');
        break;
      case 1:
        $head.addClass('project-head');
        break;
      case 2:
        $head.addClass('lab-head');
        break;
      case 3:
        $head.addClass('lecture-head');
        break;
      case 4:
        $head.addClass('resource-head');
        break;
      case 5:
        $head.addClass('hour-head');
        break;
      case 6:
        $head.addClass('staff-head');
        break;
      default:
        $head.addClass('home-head');
    }
  };
});

/* Controllers */

cs2App.controller('genCtrl', ['$scope', 'classService', function($scope, classService){
  
}]);

cs2App.controller('homeCtrl', ['$scope', 'classService', function($scope, classService){
  classService.changeActive("home");
}]);

cs2App.controller('projectCtrl', ['$scope', 'classService', function($scope, classService){
  classService.changeActive("projects");
  
  $scope.projects = [ 
    {number: 1, name: 'Collaboration Policy', out:'September 5', due:'First Lab', file:'Non-Collaboration_Policy.pdf', disabled:false},
    {number: 2, name: 'Photoshop', out:'September 25', due:'October 2', file:'Photoshop-Project.zip', disabled:false},
    {number: 3, name: 'Excel', out:'October 3', due:'October 16', file:'Excel-Assignment-2014.pdf', disabled:false},
    {number: 4, name: 'HTML: Part I', out:'October 17', due:'October 30', file:'HTMLAssignmentFall2014.pdf', disabled:false},
    {number: 5, name: 'HTML: Part II', out:'October 31', due:'November 13', file:'HTMLAssignmentFall2014.pdf', disabled:false},
    {number: 6, name: 'Python', out:'November 20', due:'December 6', file:'Python Assignment 2014.pdf', disabled:false}
  ];
}]);

cs2App.controller('labCtrl', ['$scope', 'classService', function($scope, classService){
  classService.changeActive("labs");
  
  $scope.labs = [ 
    {number: '0', name: 'Introduction', date: 'September 16-18', file:'Lab_0.pdf', disabled:false},
    {number: '1', name: 'Photoshop', date: 'September 23-25', file:'Photoshop_Lab_1.zip', disabled:false},
    {number: '2', name: 'Excel', date: 'September 30 - October 2', file:'ExcelLab.pdf', disabled:false},
    {number: '3a', name: 'HTML: Part I', date: 'October 7-9', file:'HTMLLab.pdf', disabled:false},
    {number: '3b', name: 'HTML: Part II', date: 'October 14-16', file:'HTMLLab2.pdf', disabled:false},
    {number: '3c', name: 'HTML: Part III', date: 'October 21-23', file:'HTMLLab3.pdf', disabled:false},
    {number: '3d', name: 'HTML: Part IV', date: 'October 28-30', file:'HTMLLab4.pdf', disabled:false},
    {number: '4a', name: 'Python: Part I', date: 'November 11-13', file:'PythonLab1.pdf', disabled:false},
    {number: '4b', name: 'Python: Part II', date: 'November 18-20', file:'PythonLab2.pdf', disabled:false}
  ];
}]);

cs2App.controller('lectureCtrl', ['$scope', 'classService', function($scope, classService){
  classService.changeActive("lectures");
  
  $scope.lectures = [ 
    {number: '0', name: 'Introduction to the Digital World', date: 'September 4', file:'Lecture-1-2014-Introduction.ppt', disabled:false},
    {number: '1', name: 'Computing History', date: 'September 9', file:'lecture2-History-of-Computing-2014.ppt', disabled:false},
    {number: '2', name: 'The Rise of the Internet', date: 'September 11', file:'Lecture3-Fall-2014-Internet.ppt', disabled:false},
    {number: '3', name: 'Introduction to Data and Graphics', date: 'September 16', file:'lecture4-Data and Graphics-2014.ppt', disabled:false},
    {number: '4', name: 'Computer Architecture', date: 'September 18', file:'lecture5-Architecture-2014.ppt', disabled:false},
    {number: '5', name: 'Software and Operating Systems', date: 'September 23', file:'Lecture6-Software-and-OS-2014.ppt', disabled:false},
    {number: '6', name: 'Input/Output and Secondary Memory', date: 'September 25', file:'lecture7-Input-Output-and-Secondary-Memory-2014.ppt', disabled:false},
    {number: '7', name: 'Legal Issues in Computing', date: 'September 30', file:'lecture8-Legal-issues-2014.ppt', disabled:false},
    {number: '8', name: 'Intro to HTML', date: 'October 2', file:'lecture11-html-intro-to-web-design-2014.ppt', disabled:false},
    {number: '9', name: 'HTML and CSS', date: 'October 7', file:'Lecture12-More-HTML-and-CSS2014.ppt', disabled:false},
    {number: '10', name: 'Introduction to Cybercrime', date: 'October 9', file:'lecture13-cybercrime-2014.ppt', disabled:false},
    {number: '11', name: 'Cyber Security / Midterm Review', date: 'October 14', file:'lecture-Cybercrime-PART-2-2014.ppt', disabled:false},
    {number: '12', name: 'Midterm Exam', date: 'October 16', file:'', disabled:true},
    {number: '13', name: 'No Class', date: 'October 21', file:'', disabled:true},
    {number: '14', name: 'Multimedia Digital Audio', date: 'October 23', file:'lecture14-multimedia-digital-audio-2014.ppt', disabled:false},
    {number: '15', name: 'Multimedia Digital Imaging', date: 'October 28', file:'lecture15-multimedia-digital-imaging-2014.ppt', disabled:false},
    {number: '16', name: 'Multimedia Digital Videa / Digital Compression', date: 'October 30', file:'lecture16-Digital-Video-2014.ppt', disabled:false},
    {number: '17', name: 'No Class', date: 'November 4', file:'', disabled:true},
    {number: '18', name: 'No Class', date: 'November 6', file:'', disabled:true},
    {number: '19', name: 'Thinking Like a Programmer/Python', date: 'November 11', file:'Introduction to programming 2013.ppt', disabled:false},
    {number: '', name: '', date: '', file:'lecture17a writing a program(python).ppt', disabled:false},
    {number: '20', name: 'Digital Data Networks', date: 'November 13', file:'lecture18 digital networks 2014.ppt', disabled:false},
    {number: '21', name: 'Databases and Privacy Issues', date: 'November 18', file:'Databases and Privacy 2014-1.ppt', disabled:false},
    {number: '22', name: 'Artificial Intelligence', date: 'November 20', file:'Artificial intelligence 2014.ppt', disabled:false},
    {number: '23', name: 'No Class', date: 'November 25', file:'', disabled:true},
    {number: '24', name: 'No Class', date: 'November 27', file:'', disabled:true},
    {number: '25', name: 'The Internet of Things Pervasive Computing', date: 'December 2', file:'lecture22 Pervasive Computing 2014.pptx', disabled:false},
    {number: '26', name: 'Final Review', date: 'December 4', file:'', disabled:true},
    {number: '27', name: 'Early Final (optional)', date: 'December 9', file:'', disabled:true}
  ];
}]);

cs2App.controller('resourceCtrl', ['$scope', 'classService', function($scope, classService){
  classService.changeActive("resources");
  
  $scope.resources = [ 
    {name: 'CS2 Canvas', url: 'https://canvas.brown.edu/courses/932470'},
    {name: 'Non-Collaboration Policy', url: 'course/14-projects/Non-Collaboration_Policy.pdf'},
    {name: 'A Good Binary Primer', url: 'http://www.swansontec.com/binary.html'},
    {name: 'Analog vs Digital', url: 'http://www.diffen.com/difference/Analog_vs_Digital'},
    {name: 'Computer Architecture Primer', url: 'http://computer.howstuffworks.com/pc.htm'},
    {name: "Don's Test HTML Pages", url: 'course/Dons-HTML-Test-pages.zip'},
    {name: "The Babbage Machine", url: 'http://www.computerhistory.org/babbage/'}
  ];
}]);

cs2App.controller('hoursCtrl', ['$scope', 'classService', function($scope, classService){
  classService.changeActive("hours");
}]);

cs2App.controller('staffCtrl', ['$scope', 'classService', function($scope, classService){
  classService.changeActive("staff");
  
  $scope.staff = { 
    don: {name:'Don Stanford', alias: 'Professor Oak', hour: 'by appointment', login: 'dls'},
    wonnie: {name:'Wonnie Sim', alias: 'Charmander', hour: 'Tue. 6-7 PM, Thu. 8-9 PM', login: 'ssim'},
    arielle: {name:'Arielle Chapin', alias: 'Magikarp', hour: 'Labs only', login: 'abchapin'},
    jj: {name:'Jiajie Chen', alias: 'Snivy', hour: 'Wed. 5-6 PM', login: 'jc124'},
    taylor: {name:'Taylor DeRosa', alias: 'Diglett', hour: 'Wed. 5-6 PM', login: 'tderosa'},
    joe: {name:'Joe Engelman', alias: 'Meowth', hour: 'Thu. 6-8 PM', login: 'joengelm'},
    ryan: {name:'Ryan Gourley', alias: 'Pikachu', hour: 'Mon. 8-9 PM, Wed. 9-10 PM', login: 'rcgourle'},
    tim: {name:'Timothy Lim', alias: 'Hitmonchan', hour: 'Mon. 8-9 PM', login: 'tylim'},
    will: {name:'Will Truong', alias: 'Snorlax', hour: 'Thu. 7-9 PM', login: 'wtruong'},
    amanda: {name:'Amanda Yao', alias: 'Jigglypuff', hour: 'Tue. 6-7 PM', login: 'asyao'},
    zach: {name:'Zach Zagorski', alias: 'Arcanine', hour: 'Thu. 6-7 PM', login: 'zzagorsk'}
  };
}]);
