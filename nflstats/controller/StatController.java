package com.zain.nflstats.controller;

import com.zain.nflstats.model.Stats;
import com.zain.nflstats.service.StatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/data")
public class StatController {

    //@Autowired
    private StatService service;

    public StatController(StatService service) {
        this.service = service;
    }

    @GetMapping("/getAll")
    public List<Stats> getData(){
       return service.getAllStats();
    }
}
