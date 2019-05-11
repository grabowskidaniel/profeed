package br.com.projuris.profeed.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CountFeedbackDTO {

    private Long amountFeedbackTo;

    private Long amountFeedbackFrom;

    private Long userId;

}
