package com.zain.nflstats.repository;

import com.zain.nflstats.model.RecStats;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecRepository extends JpaRepository<RecStats,Long> {
}
