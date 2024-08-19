package com.zain.nflstats.model;

import jakarta.persistence.*;

@Entity
@Table(name="receiving2023")
public class RecStats {

    @Id
    @GeneratedValue
    private long id;

    @Column(name="player")
    private String player;

    @Column(name="Rec")
    private String rec;

    @Column(name="Yds")
    private String yards;

    @Column(name="TD")
    private String td;

    @Column(name="LNG")
    private String lng;

    @Column(name="Rec FUM")
    private String fum;

    @Column(name="Rec YAC/R")
    private String yac;

    public String getTgts() {
        return tgts;
    }

    public void setTgts(String tgts) {
        this.tgts = tgts;
    }

    public String getYac() {
        return yac;
    }

    public void setYac(String yac) {
        this.yac = yac;
    }

    public String getFum() {
        return fum;
    }

    public void setFum(String fum) {
        this.fum = fum;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }

    public String getTd() {
        return td;
    }

    public void setTd(String td) {
        this.td = td;
    }

    public String getYards() {
        return yards;
    }

    public void setYards(String yards) {
        this.yards = yards;
    }

    public String getRec() {
        return rec;
    }

    public void setRec(String rec) {
        this.rec = rec;
    }

    public String getPlayer() {
        return player;
    }

    public void setPlayer(String player) {
        this.player = player;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Column(name="Tgts")
    private String tgts;
}
