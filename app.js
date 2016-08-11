var app = angular.module('app', [ ])
.controller('clistCtrl', function($scope){
  $scope.currentContactId = -1;
  $scope.clist = [
    {
      name: 'Иван Петров',
      phone: '+7-111-333-00-00',
      email: 'azazaza@azaza.az'
    }
  ];
  $scope.addNewContact = function() {
    if ( $scope.name != '' ) {
      $scope.clist.push({
        name: $scope.name,
        phone: $scope.phone,
        email: $scope.email
      });
      $scope.name = '';
      $scope.phone = '';
      $scope.email = '';
    }
  }
  $scope.saveContact = function() {
    if($scope.currentContactId > -1){
      var id = $scope.currentContactId;
      $scope.clist[id].name = $scope.name;
      $scope.clist[id].phone = $scope.phone;
      $scope.clist[id].email = $scope.email;
      $scope.name = '';
      $scope.phone = '';
      $scope.email = '';
      $scope.currentContactId = -1;
    }
  }
  $scope.editContact = function (id) {
    $scope.currentContactId = id;
    $scope.name = $scope.clist[id].name;
    $scope.phone = $scope.clist[id].phone;
    $scope.email = $scope.clist[id].email;
  }
  $scope.deleteContact = function(id) {
    $scope.clist.splice(id, 1);
  }
})