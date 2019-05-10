package br.com.projuris.profeed.controller;

import br.com.projuris.profeed.entity.User;
import br.com.projuris.profeed.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequestMapping("/api")
@Api(tags = "User")
public class UserResource {

    private final Logger log = LoggerFactory.getLogger(UserResource.class);

    @Autowired
    private UserService userService;

    @PostMapping(path = "/user")
    @ApiOperation(value = "Saving new user.")
    public ResponseEntity<User> convert(@Valid @RequestBody User user) throws IOException {
        log.debug("REST request to convert: {}", user);
        userService.save(user);
        return ResponseEntity.ok(user);
    }

    @GetMapping(path = "/user")
    public String init(){
        return  "ok";
    }

}
