package com.zain.nflstats.repository;

import com.zain.nflstats.model.RushingStats;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RushingStatRepository extends JpaRepository<RushingStats, Long> {
}
