var PopoverConfirm = (function () {
    var trunk;
    var message;
    var validFunction;

    var launched = false;

    _initPopover = function (datas) {
        datas = datas;
        trunk = datas.trunk;
        message = _setMessage(datas);
        validFunction = datas.validFunction;

        _bindingsPopoverConfirm();
        
        launched = true;
    };

    _bindingsPopoverConfirm = function () {

        if(launched) return;
        
        $(document).on("click", ".popover-confirm-cancel", _cancelPopover);

        $(document).on("click", ".popover-confirm-valid", _validPopover);
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
    display = function (datas) {

        _initPopover(datas);

        // prepare popover
        trunk.popover({
            animation: false,
            delay: 0,
            html: true,
            placement: "bottom",
            // viewport: ".commande-group",
            content: message,
        });

        // active le popover
        trunk.popover("show");
    };

    close = function () {
        trunk.popover("destroy");
    };

    _cancelPopover = function (e) {
        e.preventDefault();
        close();
    };

    _validPopover = function (e) {
        e.preventDefault();
        close();
        validFunction();
    };

    return {
        display: display
    };
})();
