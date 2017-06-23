$(function () {
    $("#car-type").on('change', function () {
        var value = $("#car-type option:selected").val();
        if (value === "3") {
            $("#has-leather").before("<input type='hidden' id='disabled-hidden' name='hasleatherseats' value='true' />");
            $("#has-leather").prop('disabled', true);
            $("#has-leather").prop('checked', true);
        } else {
            $("#has-leather").prop('disabled', false);
            $("#disabled-hidden").remove();
        }
    });
});