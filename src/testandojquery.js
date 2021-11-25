const $ = require("jquery");

$('.adicionar').on('click', adicionar);
$('.remover').on('click', remover);

function adicionar() {
  var new_chq_no = parseInt($('#total_chq').val()) + 1;
  var new_input = "<input type='text' id='new_" + new_chq_no + "'>";

  $('#new_chq').append(new_input);

  $('#total_chq').val(new_chq_no);
}

function remover() {
  var last_chq_no = $('#total_chq').val();

  if (last_chq_no > 1) {
    $('#new_' + last_chq_no).remove();
    $('#total_chq').val(last_chq_no - 1);
  }
}