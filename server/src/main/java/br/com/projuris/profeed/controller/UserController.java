package br.com.projuris.profeed.controller;

import br.com.projuris.profeed.dto.PasswordChangeDTO;
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
import java.util.List;

@RestController
@RequestMapping("/api")
@Api(tags = "User")
public class UserController {

    private final Logger log = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @PostMapping(path = "/user")
    @ApiOperation(value = "Saving new user.")
    public ResponseEntity<User> save(@Valid @RequestBody User user) throws IOException {
        log.debug("REST request to save: {}", user);
        userService.save(user);
        return ResponseEntity.ok(user);
    }

    @PostMapping(path = "/user/change-password")
    public void changePassword(@RequestBody PasswordChangeDTO passwordChangeDto) {
        userService.changePassword(passwordChangeDto.getCurrentPassword(), passwordChangeDto.getNewPassword());
    }

    @GetMapping(path = "/user/getAll")
    @ApiOperation(value = "Get all users .")
    public ResponseEntity<List<User>> getAll() throws IOException {
        log.debug("REST request to getAll users");
        List<User> list = userService.getAll();
        return ResponseEntity.ok(list);
    }
    @GetMapping(path = "/user/getAllActiveUsers")
    @ApiOperation(value = "REST request to getAll active users")
    public ResponseEntity<List<User>> getAllActiveUsers() throws IOException {
        log.debug("REST request to getAll active users");
        List<User> list = userService.getAllActiveRoleUser();
        return ResponseEntity.ok(list);
    }
}
