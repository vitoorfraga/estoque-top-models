import axios from "axios";

import { Sidebar } from "../../components/Sidebar";
import "./styles.css";

interface Produto {
  produtoId: string;
  nome: string;
  qtd: string;
  categoriaId: string;
}

function Contact() {
  return (
    <div className="main-grid" style={{ background: "#f6f6f4" }}>
      <Sidebar />
      <div className="main-content">
        <h1 style={{ margin: "2rem" }}>Entre em contato</h1>

        <div className="iframe-contato">
          <iframe src="https://us21.list-manage.com/contact-form?u=583a3f5913d02ce069123c501&form_id=8fdf70ebda6315ccec79eb3fa067e7bc"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
