$(document).ready(function () {
	$('#telefono').mask('000-000-0000');
});
let txtNombre = document.getElementById('txtNombre');
txtNombre.focus();

const app = new Vue({
	el: '#app',
	data: {
		titulo: 'Directorio ',
		contactos: [],
		contactoNombre: '',
		contactoTelefono: '',
		contactoDire: '',
		contactoPuesto: '',
		contactoCorreo: '',
		seleccionado: false,
	},
	methods: {
		limpiar: function () {
			this.contactoNombre = '';
			this.contactoTelefono = '';
			this.contactoDire = '';
			this.contactoPuesto = '';
			this.contactoCorreo = '';
		},
		// -- AGREGAR --
		agregarContacto: function () {
			//Validaciones
			if (
				this.contactoNombre === '' ||
				this.contactoTelefono === '' ||
				this.contactoDire === ''||
				this.contactoPuesto === ''||
				this.contactoCorreo === ''

			) {
				alert('¡Todos los campos son requeridos!');
			} else {
				this.contactos.push({
					nombre: this.contactoNombre,
					telefono: this.contactoTelefono,
					direccion: this.contactoDire,
					puesto: this.contactoPuesto,
					correo: this.contactoCorreo,
				});

				this.limpiar();
				localStorage.setItem('agenda-pro', JSON.stringify(this.contactos));
				let txtNombre = document.getElementById('txtNombre');
				txtNombre.focus();
			}
		},
		// -- MOSTRAR --
		mostrarContacto: function (index) {
			if (this.contactoNombre === '') {
				document.getElementById('boton-submit').disabled = true;
				this.contactos[index].seleccionado = true;
				this.contactoNombre = this.contactos[index].nombre;
				this.contactoTelefono = this.contactos[index].telefono;
				this.contactoDire = this.contactos[index].direccion;
				this.contactoPuesto = this.contactos[index].puesto;
				this.contactoCorreo = this.contactos[index].correo;
			} else {
				this.editarContacto(index);
				this.contactos[index].seleccionado = false;
				document.getElementById('boton-submit').disabled = false;
			}
		},
		// -- EDITAR --
		editarContacto: function (index) {
			this.contactos[index].nombre = this.contactoNombre;
			this.contactos[index].telefono = this.contactoTelefono;
			this.contactos[index].direccion = this.contactoDire;
			this.contactos[index].puesto = this.contactoPuesto;
			this.contactos[index].correo = this.contactoCorreo;
			this.btnEdicion = 'Editar';
			this.limpiar();

			localStorage.setItem('agenda-pro', JSON.stringify(this.contactos));
		},
		// -- ELIMINAR --
		eliminar: function (index) {
			this.contactos.splice(index, 1);
			localStorage.setItem('directorio', JSON.stringify(this.contactos));
		},
	},
	// -- GUARDAR EN LOCAL --
	created: function () {
		let datosDB = JSON.parse(localStorage.getItem('directorio'));
		console.log(datosDB);

		if (datosDB === null) {
			this.contactos = [];
		} else {
			this.contactos = datosDB;
		}
	},
});
