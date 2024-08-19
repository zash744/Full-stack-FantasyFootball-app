package com.zain.nflstats.service;

import com.zain.nflstats.model.RushingStats;
import com.zain.nflstats.repository.RushingStatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RushingServiceImpl implements RushingService{

    @Autowired
    private RushingStatRepository rushingStatRepository;

    @Override
    public List<RushingStats> getAllRushingStats() {
        return rushingStatRepository.findAll();
    }
}
