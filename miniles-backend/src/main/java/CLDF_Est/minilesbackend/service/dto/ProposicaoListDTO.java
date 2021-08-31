package CLDF_Est.minilesbackend.service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor


public class ProposicaoListDTO {
    private Long id;
    private String nome;
    private String sigla;
    private String ementa;
    private Integer numeroDocumentos;

}
