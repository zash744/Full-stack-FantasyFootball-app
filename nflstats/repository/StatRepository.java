package com.zain.nflstats.repository;

import com.zain.nflstats.model.Stats;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StatRepository extends JpaRepository<Stats, Long> {
}
