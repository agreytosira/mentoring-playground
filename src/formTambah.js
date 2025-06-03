class FormTambah extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <form>
    <h2>Tambah Catatan</h2>
    <input type="text" id="judul" placeholder="Masukkan Judul Catatan"></input>
    <textarea id="isi"></textarea>
    <button type="submit" class="btn-primary">Tambahkan</button>
    </form>`;
    this.classList.add('form-tambah');
  }
}

customElements.define('form-tambah', FormTambah);
