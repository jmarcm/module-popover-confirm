var PopoverConfirm = (function () {
    var trunk;
    var message;
    var validFunction;


    initPopover = function (datas) {
        
        datas = datas;
        trunk = datas.trunk;
        message = _setMessage(datas);
        validFunction = datas.validFunction;

        _bindingsPopoverConfirm();
    };
    
    _bindingsPopoverConfirm = function() {

        $(document).on("click", ".popover-confirm-cancel", _cancelPopover);

        $(document).on("click", ".popover-confirm-valid", _validPopover);
    }

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
    }

    close = function() {
        
        trunk.popover("destroy");

    }

    _cancelPopover = function(e) {

        e.preventDefault();
        console.log("PopoverConfirm");
        close();
          
    }


    _validPopover = function(e) {
        e.preventDefault();
        console.log("popver valid");
        validFunction();
    }


    return {
        init: init,
        display: display
    }
})();
