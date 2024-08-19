package com.zain.nflstats.model;

import jakarta.persistence.*;

@Entity
@Table(name="rushingstats2023")
public class RushingStats {

    @Id
    @GeneratedValue
    private long id;

    @Column(name="player")
    private String player;

    @Column(name="Rush Yds")
    private String rushyds;

    @Column(name="Att")
    private String att;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPlayer() {
        return player;
    }

    public void setPlayer(String player) {
        this.player = player;
    }

    public String getRushyds() {
        return rushyds;
    }

    public void setRushyds(String rushyds) {
        this.rushyds = rushyds;
    }

    public String getAtt() {
        return att;
    }

    public void setAtt(String att) {
        this.att = att;
    }

    public String getTd() {
        return td;
    }

    public void setTd(String td) {
        this.td = td;
    }

    public String getRperc() {
        return rperc;
    }

    public void setRperc(String rperc) {
        this.rperc = rperc;
    }

    public String getFumbles() {
        return fumbles;
    }

    public void setFumbles(String fumbles) {
        this.fumbles = fumbles;
    }

    @Column(name="TD")
    private String td;

    @Column(name="Rush 1st%")
    private String rperc;

    @Column(name="Rush FUM")
    private String fumbles;



}
