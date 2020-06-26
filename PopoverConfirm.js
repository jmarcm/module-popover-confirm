var PopoverConfirm = (function () {
    var trunk;
    var message;

    initPopover = function (datas) {
        
        trunk = datas.trunk;
        message = _setMessage(datas);
    };

    _setMessage = function (datas) {
        var msg = ["<form class='confirm'>"];
        msg.push("<label>" + datas.msg + "</label>");
        // msg.push(
        //     "<a href='#' class='button btn btn-xs btn-link popover-confirm-exit'>Annuler</a>"
        // );
        msg.push(
            "<a href='#' class='button btn btn-xs btn-success popover-confirm-valid' >Oui</a>"
        );
        msg.push(
            "<a href='#' class='button btn btn-xs btn-danger popover-confirm-cancel' >Non</a>"
        );
        msg.push("</form>");

        return msg.join("");
    };

    /**
     * Affiche la popover
     */
    display = function(datas) {
        
        initPopover(datas);

        // prepare popover
        trunk.popover({
            animation: false,
            delay: 0,
            html: true,
            placement: "left",
            // viewport: ".commande-group",
            content: message,
        });

        // active le popover
        trunk.popover("show");

        console.log(this);
    }


    return {
        init: init,
        display: display
    }
})();
