angular.module('vk-api-angular').directive('vkContact', function () {
  return {
    restrict: 'AEC',
    template: '<div data-ng-attr-id="{{::id}}"></div>',
    scope: {},
    link: function (scope, element, attrs) {
      scope.id = attrs.elementId || 'vk-widget-' + scope.$id + '--contact';
      VK.Widgets.ContactUs(scope.id, {
        text: attrs.text,
        height: attrs.height
      }, attrs.id || -20003922);
    }
  };
});