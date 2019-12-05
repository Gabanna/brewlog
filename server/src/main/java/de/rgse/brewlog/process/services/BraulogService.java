package de.rgse.brewlog.process.services;

import com.querydsl.jpa.impl.JPAQuery;
import de.rgse.brewlog.process.model.Brauansatz;
import de.rgse.brewlog.process.model.Braulog;
import de.rgse.brewlog.process.model.QBraulog;
import de.rgse.brewlog.process.model.vo.CreateBraulogRequest;

import javax.inject.Inject;
import javax.persistence.EntityManager;
import java.util.List;

public class BraulogService extends GenericService<Braulog> {

	private static final QBraulog BRAULOG = QBraulog.braulog;
	private BrauansatzService brauansatzService;

	@Inject
	public BraulogService(EntityManager entityManager, BrauansatzService brauansatzService) {
		super(entityManager, BRAULOG);
		this.brauansatzService = brauansatzService;
	}

	public List<Braulog> getBraulogs(String clientId) {
		return new JPAQuery<Braulog>(entityManager()).from(BRAULOG).where(BRAULOG.clientId.eq(clientId)).fetch();
	}

	public Braulog create(String clientId, CreateBraulogRequest request) {
		Brauansatz brauansatz = brauansatzService.create(request);

		Braulog braulog = new Braulog();
		braulog.setClientId(clientId);
		braulog.setBrauansatz(brauansatz);

		return persist(braulog);
	}
}
