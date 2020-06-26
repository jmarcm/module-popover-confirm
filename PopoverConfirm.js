class PopoverConfirm {
    constructor(datas) {
        this.trunk = datas.trunk;
        this.message = this.setMessage(datas);
        // this.display();

        this.bindings();

        return this;
    }

    bindings() {
        $(document).on("click", ".popover-confirm-cancel", this.cancelPopover);
    }

    setMessage(datas) {
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
    }

    display() {
        // prepare popover
        this.trunk.popover({
            animation: false,
            delay: 0,
            html: true,
            placement: "left",
            // viewport: ".commande-group",
            content: this.message,
        });

        // active le popover
        this.trunk.popover("show");
    }

    cancelPopover(e) {
        e.preventDefault();
        console.log(PopoverConfirm);
        // PopoverConfirm.close();

        // this.trunk.on('hidden.bs.popover', function(){
        //     alert('The popover is now hidden.');
        //   });
    }

    close() {
        alert("sdfsdf");
        // this.trunk.popover("destroy");
    }
}
