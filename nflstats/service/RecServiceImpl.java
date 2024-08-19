package com.zain.nflstats.service;

import com.zain.nflstats.model.RecStats;
import com.zain.nflstats.repository.RecRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecServiceImpl implements RecService{
    @Autowired

    private RecRepository recRepository;

    @Override
    public List<RecStats> getAllRecStats() {
        return recRepository.findAll();
    }
}
