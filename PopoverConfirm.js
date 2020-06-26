class PopOverConfirm {

    constructor(datas) {

        this.datas = datas;

        // this.setMessage(datas);

    };


    setMessage() {

        var msg = ["<form class='confirm' data-datas='" + JSON.stringify(this.datas) + "'>"];
        msg.push("<label>" + this.datas.msg + "</label>");
        msg.push("<a href='#' class='button btn btn-xs btn-link exit'>Annuler</a>");
        msg.push("<a href='#' class='button btn btn-xs btn-success valid' >Oui</a>");
        msg.push("<a href='#' class='button btn btn-xs btn-danger cancel' >Non</a>");
        msg.push("</form>");

        return msg.join("");
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
