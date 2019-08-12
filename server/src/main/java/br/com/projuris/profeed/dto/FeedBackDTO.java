package br.com.projuris.profeed.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FeedBackDTO {

    private Long id;

    private String text;

    private Long idFrom;

    private String nameFrom;

    private String photoUrlFrom;

    private Long idTo;

    private String nameTo;

    private String photoUrlTo;

}
