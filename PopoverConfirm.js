class PopOverConfirm {
    constructor(datas) {
        this.trunk = datas.trunk;
        this.message = this.setMessage(datas);

        this.display();
    }

    setMessage(datas) {
        var msg = [
            "<form class='confirm'>",
        ];
        msg.push("<label>" + datas.msg + "</label>");
        msg.push(
            "<a href='#' class='button btn btn-xs btn-link popover-confirm-exit'>Annuler</a>"
        );
        msg.push(
            "<a href='#' class='button btn btn-xs btn-success popover-confirm-valid' >Oui</a>"
        );
        msg.push(
            "<a href='#' class='button btn btn-xs btn-danger popover-confirm-cancel' >Non</a>"
        );
        msg.push("</form>");

        return msg.join("");
    }


    display() {
        
        // prepare popover
        this.trunk.popover({
            animation: false,
            delay: 0,
            html: true,
            placement: 'left',
            // viewport: ".commande-group",
            content: this.message
        });

        // active le popover
        this.trunk.popover("show");
    }

    popConfirmAction(datas_checked) {
        /**
         * Affiche le popup de confirmation
         * @type @exp;$@call;extend
         */

        var datas = $.extend({}, datas_checked);
        delete datas.input;

        console.log("datas_check pop");
        console.log(datas);
    }
}
