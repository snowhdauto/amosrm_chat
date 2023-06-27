define(['jquery', 'underscore', 'twigjs'], function ($, _, Twig) {
  var CustomWidget = function () {
    var self = this, // для доступа к объекту из методов
      system = self.system(), //Данный метод возвращает объект с переменными системы.
      langs = self.langs;  //Объект локализации с данными из файла локализации (папки i18n)

    this.callbacks = {
      settings: function () {
        return true;
      },
      onSave: function () {
        //alert('click');
        return true;
      },
      init: function () {
        (function(d, w, c) {
          w.ChatraID = self.get_settings().chatra_id;
          var s = d.createElement('script');
          w[c] = w[c] || function() {
              (w[c].q = w[c].q || []).push(arguments);
          };
          s.async = true;
          s.src = 'https://call.chatra.io/chatra.js';
          if (d.head) d.head.appendChild(s);
        })(document, window, 'Chatra');
        return true;
      },
      bind_actions: function () {
        return true;
        },
      render: function () {
        return true;
        },
      dpSettings: function () {},
      advancedSettings: _.bind(function () {
        var $work_area = $('#work-area-' + self.get_settings().widget_code),
        $save_button = $(
          Twig({ref: '/tmpl/controls/button.twig'}).render({
            text: 'Сохранить',
            class_name: 'button-input_blue button-input-disabled js-button-save-' + self.get_settings().widget_code,
            additional_data: ''
          })
        ),
        $cancel_button = $(
          Twig({ref: '/tmpl/controls/cancel_button.twig'}).render({
            text: 'Отмена',
            class_name: 'button-input-disabled js-button-cancel-' + self.get_settings().widget_code,
            additional_data: ''
          })
        );

        console.log('advancedSettings');

        $save_button.prop('disabled', true);
        $('.content__top__preset').css({float: 'left'});

        $('.list__body-right__top').css({display: 'block'})
          .append('<div class="list__body-right__top__buttons"></div>');
        $('.list__body-right__top__buttons').css({float: 'right'})
          .append($cancel_button)
          .append($save_button);
      }, self),
      destroy: function () {},
      contacts: {
        selected: function () {}
      },
      onSalesbotDesignerSave: function (handler_code, params) {},
      leads: {
        selected: function () {}
      },
      todo: {
        selected: function () {}
      },
      onAddAsSource: function (pipeline_id) {}
    };
    return this;
  };
  return CustomWidget;
});