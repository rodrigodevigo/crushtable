class CrushView {
  constructor (controller, model) {
    this.model = model;
    this.controller = controller;
    this.numberInput = document.querySelector("#crushnumber");
    this.nameInput = document.querySelector("#crushname");
    this.addButton = document.querySelector("#addcrush");
    this.crushList = document.querySelector("#crushlist");
    this.addButton.onclick = this.addCrush.bind(this);
  }

  addCrush () {
    let name = this.nameInput.value;
    let number = this.numberInput.value;
    if (this.controller.chamaNoZapBB(name, number)) {
      this.show();
    } else {
      alert("Você foi iludido");
    }
  }

  show () {
    this.crushList.innerHTML = '';
    for (var i = 0; i < this.model.list.length; i++ ) {
      var crush = this.model.list[i];
      this.crushList.innerHTML += '<div class="grid_12 task_container">' +
        '<div class="task">' +
        '  <p>'+crush.print()+'</p>'+
        '</div>'+
        '<div class="task_action">'+
        '<button type="button" onclick="view.removeCrush('+crush.code+')" name="completeButton">Remover</button>'+
          '<button type="button" onclick="view.stay('+crush.code+')" name="completeButton">Ficou ?</button>'+
        '</div>'+
      '</div>';
    }
  }

  stay(code) {
    this.controller.stay(code);
    this.show();
  }

  removeCrush(code) {
    this.controller.removeCrush(code);
    this.show();
  }
}
