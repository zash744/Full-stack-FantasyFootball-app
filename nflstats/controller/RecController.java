package com.zain.nflstats.controller;

import com.zain.nflstats.model.RecStats;
import com.zain.nflstats.model.RushingStats;
import com.zain.nflstats.service.RecService;
import com.zain.nflstats.service.RushingService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/data")
public class RecController {
    private RecService recService;

    public RecController(RecService recService) {
        this.recService = recService;
    }

    @GetMapping("/getAllReceiving")
    public List<RecStats> getData(){
        return recService.getAllRecStats();
    }
}
