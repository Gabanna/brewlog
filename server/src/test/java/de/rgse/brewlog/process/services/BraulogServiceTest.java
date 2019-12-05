package de.rgse.brewlog.process.services;

import com.google.gson.Gson;
import de.rgse.brewlog.process.PersistenceTest;
import de.rgse.brewlog.process.model.Brauansatz;
import de.rgse.brewlog.process.model.Braulog;
import de.rgse.brewlog.process.model.vo.CreateBraulogRequest;
import lombok.extern.slf4j.Slf4j;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.List;

@Slf4j
public class BraulogServiceTest extends PersistenceTest {

	private BraulogService braulogService;

	@Before
	public void setup() {
		BrauansatzService brauansatzService = new BrauansatzService(entityManager);
		braulogService = new BraulogService(entityManager, brauansatzService);
	}

	@Test
	public void test_persistMinimalBraulog() throws IOException {
		String clientId = "clientId";

		try(InputStream inputStream = getClass().getResourceAsStream("/data/minimal_braulog.json")) {
			CreateBraulogRequest request = new Gson().fromJson(new InputStreamReader(inputStream), CreateBraulogRequest.class);

			Braulog persisted = transact(() -> braulogService.create(clientId, request));

			Assert.assertEquals(clientId, persisted.getClientId());
			Assert.assertNotNull(persisted.getId());
			Assert.assertNotNull(persisted.getCreated());
			Assert.assertNotNull(persisted.getUpdated());
			Assert.assertTrue(persisted.getUpdated().equals(persisted.getCreated()));

			Brauansatz persistedBrauansatz = persisted.getBrauansatz();
			Assert.assertNotNull(persistedBrauansatz);

		}
	}
}
