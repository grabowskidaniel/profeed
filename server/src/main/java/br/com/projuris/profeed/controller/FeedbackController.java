package br.com.projuris.profeed.controller;

import br.com.projuris.profeed.dto.CountFeedbackDTO;
import br.com.projuris.profeed.dto.FeedBackDTO;
import br.com.projuris.profeed.entity.Feedback;
import br.com.projuris.profeed.service.FeedbackService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
@Api(tags = "Feedback")
public class FeedbackController {

    private final Logger log = LoggerFactory.getLogger(FeedbackController.class);

    @Autowired
    private FeedbackService feedbackService;

    @PostMapping(path = "/feedback")
    @ApiOperation(value = "Saving new feedback.")
    public ResponseEntity<Feedback> create(@Valid @RequestBody Feedback feedback) throws IOException {
        log.debug("REST request to save: {}", feedback);
        Feedback feedbacksaved = this.feedbackService.save(feedback);
        return ResponseEntity.ok(feedbacksaved);
    }

    @GetMapping(path = "/feedback/to")
    @ApiOperation(value = "Find all feedback to.")
    public List<FeedBackDTO> getAllTo(){
        List<FeedBackDTO> feedbacks = this.feedbackService.findAllDTOTo();
        return feedbacks;
    }

    @GetMapping(path = "/feedback/from")
    @ApiOperation(value = "Find all feedback from.")
    public List<FeedBackDTO> getAllFrom(){
        List<FeedBackDTO> feedbacks = this.feedbackService.findAllDTOFrom();
        return feedbacks;
    }

    @GetMapping(path = "/feedback/count")
    @ApiOperation(value = "Count all feedback from and To.")
    public ResponseEntity<CountFeedbackDTO> countAllFromAndTo(){
        CountFeedbackDTO countFeedbackDTO = this.feedbackService.countAllByUser();
        return ResponseEntity.ok(countFeedbackDTO);
    }

}
