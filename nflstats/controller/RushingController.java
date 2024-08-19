package com.zain.nflstats.controller;

import com.zain.nflstats.model.RushingStats;
import com.zain.nflstats.model.Stats;
import com.zain.nflstats.service.RushingService;
import com.zain.nflstats.service.StatService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/data")
public class RushingController {
    private RushingService rushingService;

    public RushingController(RushingService rushingService) {
        this.rushingService = rushingService;
    }

    @GetMapping("/getAllRushing")
    public List<RushingStats> getData(){
        return rushingService.getAllRushingStats();
    }
}
