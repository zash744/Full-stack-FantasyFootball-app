package com.zain.nflstats.model;

import jakarta.persistence.*;

@Entity
@Table(name= "passing2023")
public class Stats {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Player")
    private String player;

    @Column(name = "Pass Yds")
    private int passYds;

    @Column(name = "Yds/Att")
    private double ydsAtt;

    @Column(name = "Att")
    private int att;

    @Column(name = "Cmp")
    private int cmp;

    @Column(name = "Cmp %")
    private double cmpPct;

    @Column(name = "TD")
    private int td;

    @Column(name = "INT")
    private int inter;

    @Column(name = "Rate")
    private double rate;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlayer() {
        return player;
    }

    public void setPlayer(String player) {
        this.player = player;
    }

    public int getPassYds() {
        return passYds;
    }

    public void setPassYds(int passYds) {
        this.passYds = passYds;
    }

    public double getYdsAtt() {
        return ydsAtt;
    }

    public void setYdsAtt(double ydsAtt) {
        this.ydsAtt = ydsAtt;
    }

    public int getAtt() {
        return att;
    }

    public void setAtt(int att) {
        this.att = att;
    }

    public int getCmp() {
        return cmp;
    }

    public void setCmp(int cmp) {
        this.cmp = cmp;
    }

    public double getCmpPct() {
        return cmpPct;
    }

    public void setCmpPct(double cmpPct) {
        this.cmpPct = cmpPct;
    }

    public int getTd() {
        return td;
    }

    public void setTd(int td) {
        this.td = td;
    }

    public int getInter() {
        return inter;
    }

    public void setInter(int inter) {
        this.inter = inter;
    }

    public double getRate() {
        return rate;
    }

    public void setRate(double rate) {
        this.rate = rate;
    }






}
