package CLDF_Est.minilesbackend.service.erro;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class DocumentoNaoEncontrado extends  RuntimeException {
}