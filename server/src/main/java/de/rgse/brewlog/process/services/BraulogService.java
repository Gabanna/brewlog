package de.rgse.brewlog.process.services;

import com.querydsl.jpa.impl.JPAQuery;
import de.rgse.brewlog.process.model.Braulog;
import de.rgse.brewlog.process.model.QBrauansatz;
import de.rgse.brewlog.process.model.QBraulog;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;

public class BraulogService {

    private static final QBraulog BRAULOG = QBraulog.braulog;

    private EntityManager entityManager;

    @Inject
    public BraulogService(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    public List<Braulog> getBraulogs(String clientId) {
        return new JPAQuery<Braulog>(entityManager).from(BRAULOG).where(BRAULOG.clientId.eq(clientId)).fetch();
    }

    public Braulog create(Braulog braulog) {
        entityManager.persist(braulog);
        return null;
    }
}
