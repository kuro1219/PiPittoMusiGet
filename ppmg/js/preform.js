$(document).ready(function(){
    /*
     * 確認ボタンが押されたら
     */
      $(document).on('click','#check',function(){
     
        $(".fm").each( function() {
          var id = $(this).attr("id");
          var fm = $("#"+id);
       //フォームのタイプによって処理を分岐
          switch( fm.prop("type") ){
            case 'text':
            case 'textarea':
              var val = fm.val();
              val = val.replace(/\n/g, "<br />");
              $(fm).after('<span class="hide del">'+val+'</span>');
            break;


          }
        });
     
        change(true);
      });
    /*
     * リセットボタンが押されたら
     */
      $(document).on('click','#reset',function(){
        reset();
      });
    /*
     * 訂正ボタンが押されたら
     */
      $(document).on('click','#back',function(){
        change();
      });
    /*
     * 送信ボタンが押されたら
     */
      $(document).on('click','#send',function(){
        var data = $("#form").serialize(); console.log(data);
     
          $.ajax({
              type: "POST",
              url: "form.php",
              data: data,
              success: function(callback){
     
              }
          });
        $("#form").html('送信しました');
        reset();
      });
    /*
     * フォームを初期化する
     */
      var reset = function(type){
          $('input,textarea').not('input[type=\"radio\"],input[type=\"checkbox\"],:hidden, :button, :submit,:reset').val('');
          $('input[type=\"radio\"], input[type=\"checkbox\"],select').removeAttr('checked').removeAttr('selected');
          $("option").attr('selected',false);
      };
    /*
     * 表示・非表示を制御する
     */
      var change = function(type){
        if(type === true){
          $(".def").hide();
          $(".hide").show();
        }else{
          $(".def").show();
          $(".hide").hide();
          $(".del").remove();
        }
      };
    });

    /*
 * jQuery-Validation-Engineの設定
 */
  jQuery("#form").validationEngine( 'attach', {
    ajaxFormValidation: true
  , onBeforeAjaxFormValidation: beforeCall //送信ボタンを押した時に実行される関数
});

/*
* 確認ボタンが押されたら
*/
function beforeCall(){
//確認ボタンが押されたらの処理
}