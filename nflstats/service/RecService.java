package com.zain.nflstats.service;

import com.zain.nflstats.model.RecStats;
import com.zain.nflstats.model.RushingStats;

import java.util.List;

public interface RecService {
    public List<RecStats> getAllRecStats();
}
