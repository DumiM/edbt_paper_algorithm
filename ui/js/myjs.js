$(document).ready(function () {
    var counter = 0;

    $("#addrow").on("click", function () {
        var newRow = $("<tr>");
        var cols =
            '                                          <td scope="row"><input class="form-control" type="text"></td>                                            <td>                                                <div>                                                    <select id="groups" class="groups-cat form-control">                                                        <option class="location">location</option>                                                        <option class="ref">ref</option>                                                        <option class="equip">equip</option>  <option class="comp">comp</option>                                                        <option class="attr">attr</option>                                                        <option class="point">point</option>                                                    </select>                                                </div>                                            </td>                                            <td>                                                <div>                                                    <select id="sub-groups" class="form-control">                                                        <option data-group="select">--select--</option>                                                        <option data-group="location">site</option>                                                        <option data-group="location">building</option>                                                        <option data-group="location">level</option>                                                        <option data-group="location">zone</option>                                                        <option data-group="ref">equipRef</option>                                                        <option data-group="ref">compRef</option>                                                        <option data-group="ref">attrRef</option>                                                        <option data-group="equip">ahu</option>                                                        <option data-group="equip">boiler</option>                                                        <option data-group="equip">fan</option>                                                        <option data-group="equip">fanCooler</option>                                                        <option data-group="equip">chiller</option>                                                        <option data-group="comp">chilledWaterPlant</option>                                                        <option data-group="comp">chiller</option>                                                        <option data-group="comp">air</option>                                                        <option data-group="comp">heatingHotWater</option>                                                        <option data-group="comp">header</option>                                                        <option data-group="attr">air</option>                                                        <option data-group="attr">exhaust</option>                                                        <option data-group="attr">supply</option>                                                        <option data-group="attr">return</option>                                                        <option data-group="attr">value</option>                                                        <option data-group="point">temp</option>                                                        <option data-group="point">volume</option>                                                        <option data-group="attr">leaving</option>  <option data-group="point">status</option>                                                    </select>                                                </div>                                            </td>                                 '
        cols +=
            '<td><input type="button" class="ibtnDel btn btn-sm btn-danger "  value="Delete"></td>';
            newRow.append(cols);
        $("table.order-list").append(newRow);
        counter++;
    });


    $("table.order-list").on("click", ".ibtnDel", function (event) {
        $(this).closest("tr").remove();
        counter -= 1
    });


    $('.groups-cat').on('change', function () {
        var val = $(this).val();
        var sub = $('#sub-groups');
        $('option', sub).filter(function () {
            if (
                $(this).attr('data-group') === val ||
                $(this).attr('data-group') === 'other'
            ) {
                if ($(this).parent('span').length) {
                    $(this).unwrap();

                    console.log('in')
                }
            } else {
                if (!$(this).parent('span').length) {
                    $(this).wrap("<span>").parent().hide();

                    console.log('in2')
                }
            }
        });
    });
    $('#groups').trigger('change');

});