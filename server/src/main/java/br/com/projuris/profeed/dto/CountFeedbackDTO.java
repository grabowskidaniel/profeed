package br.com.projuris.profeed.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CountFeedbackDTO {

    private Integer amountFeedbackTo;

    private Integer amountFeedbackFrom;

    private Integer userId;

}
