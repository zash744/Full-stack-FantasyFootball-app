package com.zain.nflstats.service;

import com.zain.nflstats.model.Stats;
import com.zain.nflstats.repository.StatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatServiceImpl implements StatService{
    @Autowired
    private StatRepository repository;


    @Override
    public List<Stats> getAllStats() {
        return repository.findAll();
    }
}
